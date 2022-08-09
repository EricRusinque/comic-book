import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCharacters, setConcepts, setLocations, setTeams, setComic, setComicSuccess } from "../actions/comic";
import { issuesApi } from "../api/issuesApi";


export const useIssue = () => {
    
    const { issueId } = useParams();
    const dispatch = useDispatch();

    const getIssue = async () => {
        const proxyurl = "https://lit-badlands-08756.herokuapp.com/"
        dispatch(setComic());
        try {
            const resp = await issuesApi.get(proxyurl+`http://comicvine.gamespot.com/api/issue/4000-${ issueId }/?api_key=7e118f67b5e46a33c486912e95b946500a1ab231&format=json&field_list=image,character_credits,team_credits,location_credits,concept_credits`);
            const comic = resp.data.results;

            setTimeout(() => {
                dispatch( setComicSuccess( comic ));
            }, 2300);
            
            const characters = comic.character_credits.map( async ({api_detail_url}) => {
                const resp = await issuesApi.get(proxyurl+`${api_detail_url}?api_key=7e118f67b5e46a33c486912e95b946500a1ab231&format=json&field_list=image,name`);
                const { results } = resp.data
                return {
                    results
                }
            });
            const teams = comic.team_credits.map( async ({api_detail_url}) => {
               
                const resp = await issuesApi.get(proxyurl+`${api_detail_url}?api_key=7e118f67b5e46a33c486912e95b946500a1ab231&format=json&field_list=image,name`);
                const { results } = resp.data
                return {
                    results
                }
            });
            const locations = comic.location_credits.map( async ({api_detail_url}) => {
               
                const resp = await issuesApi.get(proxyurl+`${api_detail_url}?api_key=7e118f67b5e46a33c486912e95b946500a1ab231&format=json&field_list=image,name`);
                const { results } = resp.data
                return {
                    results
                }
            });
            const concepts = comic.concept_credits.map( async ({api_detail_url}) => {
               
                const resp = await issuesApi.get(proxyurl+`${api_detail_url}?api_key=7e118f67b5e46a33c486912e95b946500a1ab231&format=json&field_list=image,name`);
                const { results } = resp.data
                return {
                    results
                }
            });

            Promise.all( characters ).then( character => {
                dispatch(setCharacters(character));
            });
            Promise.all( teams ).then( team => {
                dispatch(setTeams(team));
            });
            Promise.all( locations ).then( location => {
                dispatch(setLocations(location));
            });
            Promise.all( concepts ).then( concept => {
                dispatch(setConcepts(concept));
            });

            
          
        } catch (e) {
            console.log(e);
        }
    }
   
        
       
    

    
     

    useEffect(() => {

        getIssue();
        
       
    }, []);


    return;
    
}
