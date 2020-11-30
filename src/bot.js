const dotenv = require('dotenv').config();
const colors = require('colors');
const Snoolicious = require('./lib/Snoolicious');
const snoolicious = new Snoolicious();
const readline = require('readline');

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        if (ans === 'y') {
            console.log("deleting...");
            resolve(true);
        } else {
            resolve(false);
        }
    }));
}
/* 
    [Handle Command]
        - This function must be passed in as the first argument to snoolicious.queryTasks()
        - handleCommand be awaited by Snoolicious for each command dequeued from the task queue
        - This will be true when calling either the getCommands or getMentions functions, as they both return built commands
        - Reddit Submission objects do not contain a body key, rather they will be sent to the handleSubmissions function instead

        [Command Task Object]
            - The Command Task object will be passed to this function with these key/value pairs:
                task: {
                    command: { 
                        directive,
                        [arg1, arg2, arg3, ...]
                    },
                    item: {
                        <Reddit Comment Object>
                    },
                    priority: <Number you set when calling getCommands or getMentions>,
                    time: <new Date().getTime()>
                }
*/
async function handleCommand(item) {
    console.log("task received!");
    // Check if the item was saved first.
    const Q = item.body;
    const S = item.subreddit.display_name;
    console.log(`----------------------------Delete?-------------------------------\n\n`);
    console.log("comment in: r/" + S);
    console.log(Q);
    const A = await askQuestion('\n\n-------------------------------------------------------------\ny/n\n> ');
    if (A) {
        await snoolicious.requester.getComment(item.id).delete();
    }
}

/* [Snoolicious Run Cycle] */
async function run() {
    const comments =
        await snoolicious.requester.getUser(process.env.REDDIT_USER).getComments();

    for (const comment of comments) {
        await handleCommand(comment);
    }

    const fetchMore =
        async (comments) => {
            console.log('FETCHING MORE!')
            const moreComments =
                await comments.fetchMore({
                    amount: 20
                });
            if (!moreComments) {
                console.log("NO MORE!");
                return
            }
            console.log('HANDLING THEM...');
            for (const comment of comments) {
                await handleCommand(comment);

            }
            return fetchMore(moreComments);
        }

    await fetchMore(comments);

    console.log(`Finished Deleting All Comments`);

}


(async () => {
    await run();
})();