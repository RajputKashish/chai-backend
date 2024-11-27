const asyncHandler=(fn)=> async(req,req,next)=>{
    try{
        await fn(req,res,next)

    }
    catch(error){
        res.status(err.code || 500).json({
            success:false,
            messeage:err.message
        })
    }
}
export {asyncHandler}