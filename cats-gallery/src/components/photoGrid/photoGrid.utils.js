export const getId = (urls) =>{
        const regex = /\/([\w-]+)\.\w+$/;
        const id = regex.exec(urls)[1]
        return id
}
