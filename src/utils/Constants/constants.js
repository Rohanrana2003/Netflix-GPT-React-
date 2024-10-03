export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg";

export const NETFLIX_LOGO = "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg";

export const GPT_BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg";


export const API_OPTIONS ={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const CARD_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export const LANG_OPTIONS = [
      {key:'english' , name:'English'},
      {key:'hindi' , name:'Hindi'},
      {key:'spanish' , name:'Spanish'},
      {key:'russian' , name:'Russian'},
      {key:'italian' , name:'Italian'},
      {key:'chinise' , name:'Chinise'},
      {key:'tamil' , name:'Tamil'},
      {key:'french' , name:'French'},
      {key:'korean' , name:'Korean'},
      {key:'portuguese' , name:'Portuguese'},
  
    ]
