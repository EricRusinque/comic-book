import { HashRouter, Route, Routes } from 'react-router-dom';
import { IssuesScreen } from '../components/home-comic/IssuesScreen';
import { IssueScreen } from '../components/issue-screen/IssueScreen';
import './app-router.css'

export const AppRouter = () => {
    return (
        <HashRouter>
            <h1 className='title'>ComicBook</h1>
            <Routes>
                <Route path='/' element={<IssuesScreen />}/>
                <Route path='/issue/:issueId' element={<IssueScreen />} />
            </Routes>
        </HashRouter>
    );
};