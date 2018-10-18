# Sicilia-Backend

## Requirements
```bash
flask
redis
pymongo
uuid
```
## API

### alive
```bash
route: '/' 
HTTP METHOD: GET
params: null
data: null
returnFormat:
    returnCode: 200, returnData: 'welcome!'    // when success
    ...                                        // others
```

### user
```bash
route: '/login' 
HTTP METHOD: POST
params: null
data: {
    name: xxxx,
    password: xxxx
}
returnFormat:
    returnCode: 200, returnData: token                          // when success
    returnCode: 401, returnData: 'username or password wrong'   // when failed
    ...                                                         // others
```
```bash
route: '/register' 
HTTP METHOD: POST
params: null
data: {
    name: xxxx,
    password: xxxx
}
returnFormat:
    returnCode: 200, returnData: 'success'        // when success
    returnCode: 401, returnData: 'user exist'     // when failed
    ...                                           // others
```
```bash
route: '/update'
HTTP METHOD: POST
params: null
data: {
    name: xxxx,
    password: xxxx,
    new_password: xxxx,
    ...   // other info
}
returnFormat:
    returnCode: 200, returnData: 'success'            // when success
    returnCode: 401, returnData: 'password wrong'     // when failed
    ...                                               // others
```

### test
```bash
route: '/test' 
HTTP METHOD: GET
header: {
    token: xxxx,
    user: xxxx
}
params: null
data: null
returnFormat:
    returnCode: 200, returnData: 'auth ok!'    // when success
    ...                                        // others
```
