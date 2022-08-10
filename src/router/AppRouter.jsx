import { HashRouter, Route, Routes } from 'react-router-dom';
import { GridList } from '../components/home-comic';
import { IssuesScreen } from '../components/home-comic/IssuesScreen';
import { IssueScreen } from '../components/issue-screen/IssueScreen';
import './app-router.css'

export const AppRouter = () => {
    return (
        <HashRouter>
            <h1 className='title'>ComicBook</h1>
            <Routes  >
                <Route path='comic-book/' element={<IssuesScreen />}/>
                <Route path='comic-book/issue/:issueId' element={<IssueScreen />} />
            </Routes>
        </HashRouter>
    );
};