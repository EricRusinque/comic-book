import { useEffect } from "react"
import { useDispatch } from "react-redux";
import {  setComics, setComicsSuccess } from "../actions/comics";
import { issuesApi } from "../api/issuesApi";

export const useIssues = () => {
   
    const dispatch = useDispatch();
    
    const getIssues = async () => {
        dispatch(setComics());
        try {
            const proxyurl = "https://lit-badlands-08756.herokuapp.com/"
            const resp = await issuesApi.get(proxyurl+'http://comicvine.gamespot.com/api/issues/?api_key=7e118f67b5e46a33c486912e95b946500a1ab231&format=json&sort=date_added:desc');
            const comics = resp.data.results;
            console.log(comics)
            dispatch(setComicsSuccess(comics));            
            
        } catch (error) {
            console.log(error);
        }
       
    }
    useEffect(() => {
        getIssues();
    }, []);

    return;
    
    
}