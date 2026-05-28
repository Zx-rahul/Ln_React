
function Hello(){
    let name=()=>{
        return 'Full Stack Developer';
    };
    const myName='Samuel';
    return <h1>Hey There, My name is {myName} and I am a {name()}</h1>
}

export default Hello;