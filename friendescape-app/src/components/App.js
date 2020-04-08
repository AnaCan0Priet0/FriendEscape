import React, { useEffect, useContext, useState} from 'react'
import { Register, Login, CreateGroup, Page, Landing, Home, Themes, SelectedDifficulty, SelectedThemes, Locations, ERDetail, Groups, Difficulty} from '../components'
import { registerUser, retrieveUser, login, logout, isLoggedIn,search, retrieveEasy, retrieveTheme, escapeList, retrieveER, joinGroups, createGroup, retrieveGroups} from '../logic'
import { Context } from './ContextProvider'
import 'moment-timezone'
import { Route, withRouter, Redirect } from 'react-router-dom'
import '../sass/index.sass'






export default withRouter(function ({ history }) {
  const [state, setState] = useContext(Context)
  const { page, error } = state
  const [ user, setUser] = useState([])
  const [ escapes , setEscapeList] = useState([])
  const [ query, setQuery] = useState([])
  const [detail, setDetail] = useState([])
  const [group, setGroupList] = useState([])
  const [difficulty, setDifficulty] = useState([])
  const [theme, setTheme] = useState([])





  useEffect(() => {
    if (isLoggedIn()) {
      (async() => {
        const user = await retrieveUser()
        setUser(user)
      })()
    } else {
      history.push('/login')
    }
  }, [])


  useEffect(() => {
      setState({ page: 'landing' })
      history.push('/landing')

  }, [])


  function handleGoToLogin() {
    history.push('/login')
  }

  function handleMountLogin() {
    setState({ page: 'login' })
  }

  function handleMountLanding() {
    setState({ page: 'landing' })
  }

  async function handleLogin(email, password) {
    try {
      await login(email, password)
      const user = await retrieveUser()
      setUser(user)

      const availableEscapes = await escapeList()
      setEscapeList(availableEscapes)

      history.push('/home')
    } catch ({ message }) {
      setState({ ...state, error: message })
    }
  }

  function handleGoToRegister() {
    history.push('/register')
  }

  async function handleRegister(name, surname, email, telf, password) {

    try {
      await registerUser(name, surname, email, telf, password)

      history.push('/login')
    } catch ({ message }) {
      setState({ error: message })
    }
  }

  function handleMountRegister(){
    setState({ page: 'register'})
  }

  async function handleSearch(query){
    try {
      setEscapeList(await search(query))
      setState({ page: 'home' })
    } catch ({ message }) {
      setState({ error: message })
    }
  }

  async function joinGroup(){
    try{
    const availableGroups = await retrieveGroups()
    setGroupList(availableGroups)

    history.push('/groups')
  } catch ({ message }) {
    setState({ error: message })
  }
}

async function handleLocations() {
    try{

      const user = await retrieveUser()
      setUser(user)

      history.push('/locations')
      } catch ({ message }) {
        setState({ ...state, error: message })
      }
    }

    async function handleDifficulty() {
      try{
        const user = await retrieveUser()
        setUser(user)
  
        history.push('/difficulty')
        } catch ({ message }) {
          setState({ ...state, error: message })
        }
      }


    function handleTheme() {
      history.push('/themes')
      }



    async function handleDetail(id){

        try {
          const escaperoom = await retrieveER(id)
          setDetail(escaperoom)
          const user = await retrieveUser()
          setUser(user)
          history.push(`/escaperoom/${id}`)
        } catch ({ message }) {
          setState({ ...state, error: message })
        }
      }
    //   }

    function handleLogOut(){
      logout()
      history.push('/landing')

    }

    async function handleGoHome(){
      try {
      const user = await retrieveUser()
      setUser(user)

      const availableEscapes = await escapeList()
      setEscapeList(availableEscapes)

      history.push('/home')
    } catch ({ message }) {
      setState({ ...state, error: message })
    }
  }

  async function handleEasy(){

    try {
      const user = await retrieveUser()
      setUser(user)
      const difficultyEscapes = await retrieveEasy("1")

      setDifficulty(difficultyEscapes)
      history.push('/difficulty/easy')
    } catch ({ message }) {
      setState({ error: message })
    }
  }

  async function handleMedium(){

    try {
      const user = await retrieveUser()
      setUser(user)
      const difficultyEscapes = await retrieveEasy("2")

      setDifficulty(difficultyEscapes)
      history.push('/difficulty/medium')
    } catch ({ message }) {
      setState({ error: message })
    }
  }

  async function handleHard(){

    try {
      const user = await retrieveUser()
      setUser(user)
      const difficultyEscapes = await retrieveEasy("3")

      setDifficulty(difficultyEscapes)
      history.push('/difficulty/hard')
    } catch ({ message }) {
      setState({ error: message })
    }
  }

  async function handleTheme() {
    try{

      const user = await retrieveUser()
      setUser(user)

      history.push('/themes')
      } catch ({ message }) {
        setState({ ...state, error: message })
      }
    }

async function handleFiction(){
  try{
    const user = await retrieveUser()
    setUser(user)
    const themeEscapes = await retrieveTheme("fiction")
    setTheme(themeEscapes)
    history.push('/themes/fiction')
  } catch ({ message }) {
    setState({ error: message })
  }
}

async function handleHistorical(){
  try{
    const user = await retrieveUser()
    setUser(user)
    const themeEscapes = await retrieveTheme("historical")
    setTheme(themeEscapes)
    history.push('/themes/historical')
  } catch ({ message }) {
    setState({ error: message })
  }
}

async function handleCriminal(){
  try{
    const user = await retrieveUser()
    setUser(user)
    const themeEscapes = await retrieveTheme("criminal")
    setTheme(themeEscapes)
    history.push('/themes/criminal')
  } catch ({ message }) {
    setState({ error: message })
  }
}
async function handleFear(){
  try{
    const user = await retrieveUser()

    setUser(user)

    const themeEscapes = await retrieveTheme("fear")
    setTheme(themeEscapes)
    history.push('/themes/fear')
  } catch ({ message }) {
    setState({ error: message })
  }
}

async function handleJoinGroups(id){
  try{
    debugger
    await joinGroups(id)
    const message = "Joined successfully. Check your email to see the details"
    setState({ ...state, error: message })
    history.push('/groups')
    
  } catch ({ message }) {
    setState({ error: message })
  }
}

async function handleCreateAGroup(){
  try {
    const user = await retrieveUser()

    setUser(user)
    const availableEscapes = await escapeList()
    setEscapeList(availableEscapes)

  history.push('/create-group')
      } catch ({ message }) {
    setState({ ...state, error: message })
      }
    }
    

async function handleNewGroup(id){
  try{
    await createGroup(id)
    const message = " You created a new group, please check your email"
    setState({ ...state, error: message })
    history.push('/create-group')
  } catch ({ message }) {
    setState({ error: message })
  }
}




  return <div>

    <Page name={page}>
      <Route exact path="/" render={() => isLoggedIn() ? <Redirect to ="/home" /> : <Redirect to ="landing" />} />
      <Route path="/landing" render={() =>  isLoggedIn() ? <Redirect to="/home" /> : <Landing onGoToRegister={handleGoToRegister} onGoToLogin={handleGoToLogin} onMount={handleMountLanding} />} />
      <Route path="/login" render={() => isLoggedIn()? <Redirect to="/home" /> : <Login onSubmit={handleLogin} error={error} onGoToRegister={handleGoToRegister} onMount={handleMountLogin} />} />
      <Route path="/register" render={() => isLoggedIn() ? <Redirect to="/home" /> : <Register onSubmit={handleRegister} error={error} onGoToLogin={handleGoToLogin} onMount={handleMountRegister} />} />
      <Route path='/home' render={() => isLoggedIn() ? <Home user={user} onCreateAGroup={handleCreateAGroup} onHandleLogOut={handleLogOut} availableEscape = {escapes} onGoToSearch={handleSearch} onHandleLocations={handleLocations} onHandleDifficulty={handleDifficulty} onGoToDetail={handleDetail} onHandleTheme={handleTheme} onGoToJoinGroups={joinGroup} /> : <Redirect to="/home" />} />
      <Route path='/escaperoom/:id' render={props => isLoggedIn() ? <ERDetail user={user} escaperooom={detail} onHandleLogOut={handleLogOut} escaperoomId={props.match.params.id} onHandleItemClick={handleDetail} /> : <Redirect to ="landing" />} />
      <Route path='/locations' render={() => isLoggedIn() ? <Locations user={user} onHandleGoHome={handleGoHome} onHandleLogOut={handleLogOut}/>: <Redirect to ="landing" />} />
      <Route path='/themes' render={() => isLoggedIn() ? <Themes user={user} setTheme={theme} onHandleLogOut={handleLogOut} onHandleFiction={handleFiction} onHandleHistorical={handleHistorical} onHandleCriminal={handleCriminal} onHandleFear={handleFear}/>: <Redirect to ="landing" />} />
      <Route path='/groups' render={() => isLoggedIn() ? <Groups availableGroups={group} onHandleLogOut={handleLogOut} onHandleGoHome={handleGoHome} user={user} handleJoinGroup={handleJoinGroups} error={error}/>: <Redirect to ="landing" />} />
      <Route path='/difficulty' render={() => isLoggedIn() ? <Difficulty user={user}  onHandleGoHome={handleGoHome} onHandleEasy={handleEasy} onHandleMedium={handleMedium} onHandleHard={handleHard}/> : <Redirect to ="landing" />} />
      <Route path='/difficulty/easy' render={() => isLoggedIn() ? <SelectedDifficulty  difficultyEscapes={difficulty} onHandleGoHome={handleGoHome} onHandleLogOut={handleLogOut} onGoToDetail={handleDetail} />: <Redirect to ="landing" />} />
      <Route path='/difficulty/medium' render={() => isLoggedIn() ? <SelectedDifficulty   difficultyEscapes={difficulty} onHandleGoHome={handleGoHome} onHandleLogOut={handleLogOut} onGoToDetail={handleDetail} />: <Redirect to ="landing" />} />
      <Route path='/difficulty/hard' render={() => isLoggedIn() ? <SelectedDifficulty   difficultyEscapes={difficulty} onHandleGoHome={handleGoHome} onHandleLogOut={handleLogOut} onGoToDetail={handleDetail} />: <Redirect to ="landing" />} />
      <Route path='/themes/fiction' render={() => isLoggedIn() ? <SelectedThemes  themeEscapes={theme} onHandleGoHome={handleGoHome} onHandleLogOut={handleLogOut} onGoToDetail={handleDetail} onHandleFiction={handleFiction} />: <Redirect to ="landing" />} />
      <Route path='/themes/fear' render={() => isLoggedIn() ? <SelectedThemes  themeEscapes={theme} onHandleGoHome={handleGoHome} onHandleLogOut={handleLogOut} onGoToDetail={handleDetail} onHandleFear={handleFear}/>: <Redirect to ="landing" />} />
      <Route path='/themes/criminal' render={() => isLoggedIn() ? <SelectedThemes  themeEscapes={theme} onHandleGoHome={handleGoHome} onHandleLogOut={handleLogOut} onGoToDetail={handleDetail} onHandleCriminal={handleCriminal}/>: <Redirect to ="landing" />} />
      <Route path='/themes/historical' render={() => isLoggedIn() ? <SelectedThemes  themeEscapes={theme} onHandleGoHome={handleGoHome} onHandleLogOut={handleLogOut} onGoToDetail={handleDetail} onHandleHistorical={handleHistorical} />: <Redirect to ="landing" />} />
      <Route path='/create-group' render={() => isLoggedIn() ? <CreateGroup   user={user} availableGroups={group} onHandleGoHome={handleGoHome} onHandleLogOut={handleLogOut} onHandleCreateANewGroup={handleNewGroup} />: <Redirect to ="landing" />} />
    </Page>

  </div>
})
