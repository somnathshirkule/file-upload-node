export const uploadFile = (file) => {
    try{
       file.mv('./uploads/' + file.name, (error, res) => {
        if(error) throw error;
        console.log('uploaded');
       })
    }catch(error){
        throw error;
    }
}