import {useState, useEffect} from 'react'





const Github = () => {

const [name, setName] = useState('');
const [username, setUsername] = useState('');
const [followers, setFollowers] = useState('');
const [following, setFollowing] = useState('');
const [repos, setRepos] = useState('');
const [avatar, setAvatar] = useState('');
const [userinput, setUserInput] = useState('');
const [error, setError] = useState(null);


useEffect(()=>{
    fetch('https://api.github.com/users/example')
    .then(res=> res.json())
    .then(data => {
       setData(data)
    })
}, [])

const setData = ({name, login, followers, following, public_repos, avatar_url}) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url)
}


const handleSearch = (e) => {
    
    setUserInput(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userinput}`)
    .then(res => res.json())
    .then(data => {
        if(data.message){
            setError(data.message)
        }else{
            setData(data);
            setError(null)
        }
    })


}


console.log(username)
    return (
        <>
            <div>

                <div>
                    <div id="heading">
                        <i class="fa-brands fa-github"></i>
                        <h2>Github Search Engine</h2>
                    </div>

                        <div className='searchField container'>
                            <form class="row g-3 alignCenter" onSubmit={handleSubmit}>
                                <div class="input-group mb-3 inputWidth col-12 col-md-12 mt-5">
                                        <input type="text" class="form-control" placeholder="Search trending repos..." onChange={handleSearch}/>
                                        <input type="submit" class="input-group-text btn btn-info" id="basic-addon2" placeholder='Submit'/>
                                </div>
                                
                            </form>
                        </div>
                
                        {error ? (
                        <>
                            <i class="fa-brands fa-github-alt"></i>
                            <h1>User {error}</h1>
                        </>
                        ) : 
                        
                        (

                            <div className='gitCon m-5'>


                            <div className='col1'>
                                <img src={avatar} alt="github-user" width="63%"/>
                            </div>
                            <div className='col2'>
                            <p className='text-white'>Username: <span>{name}</span></p>
                                <p className='text-white'>Username: <span>{username}</span></p>

                                <p className='text-white'>followers: <span>{followers}</span></p>

                                <p className='text-white'>Repos: <span>{repos}</span></p>
                                <p className='text-white'>following: <span>{following}</span></p>
                            </div>

                            </div>
                        )}
                  
                </div>
            </div>
        </>
    )


}
export default Github