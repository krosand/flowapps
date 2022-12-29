module.exports = {
    /** The file containing the flows. If not set, defaults to flows_<hostname>.json **/
    flowFile: '/data/flows.json',
    flowFilePretty: true,
    userDir: '/data',
    // https://github.com/node-red/node-red-docker/issues/109
    adminAuth: {
       type: "credentials",
       users: [{
           username: process.env.NODERED_AUTH_ADMIN.slice(0, process.env.NODERED_AUTH_ADMIN.indexOf(':')),
           password: process.env.NODERED_AUTH_ADMIN.slice(process.env.NODERED_AUTH_ADMIN.indexOf(':')+1).replace("$2y$", "$2b$"),
           permissions: "*"
       }]
    },


    /** the tcp port that the Node-RED web server is listening on */
    uiPort: process.env.PORT || 1880,
    httpAdminRoot: '/',

     /** Configure the logging output */
     logging: {
         /** Only console logging is currently supported */
         console: {
             level: "info",
             /** Whether or not to include metric events in the log output */
             metrics: false,
             /** Whether or not to include audit events in the log output */
             audit: false
         }
     },
     exportGlobalContextKeys: false,
     externalModules: {
     },

    editorTheme: {

        palette: {
        },

        projects: {
            /** To enable the Projects feature, set this value to true */
            enabled: false,
            workflow: {
                mode: "manual"
            }
        },

        codeEditor: {
            lib: "ace",
            options: {
                theme: "vs",
            }
        }
    },

    /** Allow the Function node to load additional npm modules directly */
    functionExternalModules: true,

    functionGlobalContext: {
        // os:require('os'),
    },

    /** The maximum length, in characters, of any message sent to the debug sidebar tab */
    debugMaxLength: 1000,

    /** Maximum buffer size for the exec node. Defaults to 10Mb */
    //execMaxBufferSize: 10000000,

    /** Timeout in milliseconds for HTTP request connections. Defaults to 120s */
    //httpRequestTimeout: 120000,

    /** Retry time in milliseconds for MQTT connections */
    mqttReconnectTime: 15000,

    /** Retry time in milliseconds for Serial port connections */
    serialReconnectTime: 15000,
}
