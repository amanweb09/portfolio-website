import Navbar from '../../components/Navbar'
import { useState } from 'react'

const login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    function setInfo(name, value) {
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <>
            <Navbar />
            <div
                style={{ height: '88vh' }}
                className="container mx-auto flex-center">

                <div className="w-96 h-96 rounded-lg drop-shadow-xl bg-slate-100 dark:bg-slate-600">
                    <h2 className='font-bold text-center mt-8 mb-4'>Login</h2>

                    <form className='flex-center flex-col'>
                        <input
                            onChange={(e) => setInfo(e.target.name, e.target.value)}
                            name='email'
                            value={user.email}
                            placeHolder="Email here"
                            className='w-11/12 bg-white focus:bg-yellow-100 text-center mt-16 mb-6 h-10'
                            type="text" />

                        <input
                            onChange={(e) => setInfo(e.target.name, e.target.value)}
                            name='password'
                            value={user.password}
                            placeHolder="Password here"
                            className='w-11/12 bg-white focus:bg-yellow-100 text-center h-10'
                            type="password" />

                        <button className='mt-12 bg-yellow-500 hover:bg-yellow-600 font-bold w-11/12 h-12'>Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default login;