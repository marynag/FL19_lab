export default function getId(link, history){
    link = link ?? 'https://cdn2.thecatapi.com/images/MTYxMDIwNw.jpg'
    const devidedLink=link.split('/')
    const fileName=devidedLink.pop()
    const id=fileName.split('.')[0]
    history.push(id)
    return history
}


export function getTime(){
    const date=new Date()
    const housrs=date.getHours()
    let minutes=date.getMinutes()
    if(minutes.toString().length===1){
        minutes='0'+minutes
    }     
    return `${housrs}:${minutes}`
}




