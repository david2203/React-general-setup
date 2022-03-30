###### Hooks

/* useEffect */

  useEffect(() => {
      yourFunction();
    }, []);


/* useState */ 

 const [stateName, setState] = useState(); // standard state
 const [stateName, setState] = useState(boolean); // if state should be dynamic
 const [stateName, setState] = useState([]); // if state contains an array of things
 const [stateName, setState] = useState({}); // if state contains an object of things 



######

###### customHooks

<code>

 const useGetData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getData = async () => {
      try {
        const response = await axios.get(`${server}/api/databasetable`);
        
        setData(response.data);
  
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    useEffect(() => {
      getData();
    }, []);

    return {
      data,
      loading,
    };
  };
  // Get data from some DB and make them ready for use 

  const { data, loading } = useGetData();

</code>

<code>
const [, forceUpdate] = useReducer(x => x + 1, 0);

forceupdate();
</code>


######

###### General JS

/* for loop */ 

for (let i = 0; i > loopedData.length; i ++) {
    console.log(i)

    //replace with your function
} 

/* if Statement */ 

if( true ) {
    console.log("do this")
} else {
    console.log("do this instead")
}


######

###### AJAX w. axios

/* upload image example for strapi with axios */

useEffect(() => {
    const userId = localStorage.getItem("user_id");

    const uploadImage = async () => {
      const formData = new FormData();

      formData.append("files", files);

      axios
        .post(`${server}/api/upload`, formData)
        .then((response) => {
          const imageId = response.data[0].id;
          console.log(imageId);
          console.log(response.data);

          axios
            .put(`${server}/api/Users/${userId}`, { Profilepicture: imageId })
            .then((response) => {
              response = window.location.reload();
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          //handle error
        });
    };
    if (files) {
      uploadImage();
    }
  }, [files]);
  
######