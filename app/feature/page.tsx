// (parameter1,....,parametern)
function sayMyName(name: string){
    console.log("Your Name is", name)
}

export default function FeaturePage(){
    const name = "My Website"
    sayMyName("Sovanndy")

    console.log("Hello from server")

    return (
    <div>
        <h1>Title</h1>
        {name}
    </div>
    )
}