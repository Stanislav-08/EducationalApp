import { useEffect } from 'react'
import { supabase } from './lib/supabase'

function App() {
    useEffect(() => {
        async function testConnection() {
            const { data, error } = await supabase
                .from('test')
                .select('*')

            console.log(data)
            console.log(error)
        }

        testConnection()
    }, [])

    return <h1>Educational Platform</h1>
}

export default App