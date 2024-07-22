  const siteUrl = ConfigData.wpApiUrl;
    const serverUrl = ConfigData.SERVER;
    const [data, setData] = useState(null); // Initialize data state with null initially

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${siteUrl}/blogs?_embed&production_mode[]=${serverUrl}`);
                const data = await response.json();
                setData(data);
                // console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [siteUrl, serverUrl]);