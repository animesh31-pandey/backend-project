class apierror extends error{
    constructor(
        statuscode,
        message= "something went error",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statuscode = statuscode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors


        if(stack) {
            this.stack = stack
        }else{
            error.capturestacktrace(this, this.constructor)
        }
    }
}

export {apierror}