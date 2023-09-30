import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('')
  const [tech,setTech] = useState(new Set([]))
  const [dataBase,setDataBase] = useState(new Set([]))
  const [forntend,setForntend] = useState(new Set([]))
  const [backend,setBackend] = useState(new Set([]))
  const [infra,setInfra] = useState(new Set([]))

  console.log(search,']]]]]]')
  useEffect(()=>{
    
    async function fetchData() {
      try {
        
        const response = await axios.get(`http://65.2.132.150:8000/api/v1?keyword=${search}`);
        setData(response.data.projects);
      //   console.log(data)
      //   let arrTech = []
      //   let arrFront = []
      //   let arrBack = []
      //   let arrInfra = []
      //   let arrData = []
      //   let c= 0
      //   for(let d of data){
      //     c+=1
      //     arrTech.push(...d.technologies)
      //     console.log(d.technologies,"HHHH",d.title, arrTech,"TTTTT",c)
      //     arrFront.push(...d.frontend_skill)
      //     arrBack.push(...d.backend_skill)
      //     arrInfra.push(...d.technologies)
      //     if (d.database_skill) arrData.push(...d.database_skill)
      //     console.log("oooo",d.infrastructure_skill)
      //   console.log("lll",tech)
      // }
      // console.log(arrTech,"ppp")
      //   setTech(new Set([...tech]))
      //   setDataBase(new Set([...arrData]))
      //   setInfra(new Set([...arrInfra]))
      //   setBackend(new Set([...arrBack]))
      //   setForntend(new Set([...arrFront]))
      //   console.log(tech,"tech[[[[[")
      //   console.log(forntend,"front[[[[[")
      //   console.log(backend,"backend[[[[[")
      //   console.log(infra,"infra[[[[[")
      //   console.log(dataBase,"[[[[[")
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  },[search])
  return (
    <div div className='container mainBody'>
      <Header  setSearch={setSearch}/>
      <Card data={data} loading={loading}/>
      <h1>Footer</h1>
    </div>
  )
}

export default App
