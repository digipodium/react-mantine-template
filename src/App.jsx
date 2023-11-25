// core styles are required for all packages
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import {NotFound} from './components/NotFound';
import Admin from './components/Admin';

const theme = createTheme({
    /** Put your mantine theme override here */
});

const App = () => {
    return (
        <MantineProvider theme={theme} defaultColorScheme="light">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Admin />} >
                        {/* <Route path="/admin" element={<Admin />} /> */}

                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    )
}

export default App;