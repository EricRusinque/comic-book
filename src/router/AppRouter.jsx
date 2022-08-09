import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GridList } from '../components/home-comic';
import { IssuesScreen } from '../components/home-comic/IssuesScreen';
import { IssueScreen } from '../components/issue-screen/IssueScreen';
import './app-router.css'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <h1 className='title'>ComicBook</h1>
            <Routes>
                
                <Route exact path='/' element={<IssuesScreen />} />
                <Route path='issue/:issueId' element={<IssueScreen />} />
            </Routes>
        </BrowserRouter>
    );
};