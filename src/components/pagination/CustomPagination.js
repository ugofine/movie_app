import Pagination from '@mui/material-ui/lab/Pagination';
import {createTheme, ThemeProvider} from "@material-ui/core/styles"

const darkTheme = createTheme ({
    palette:{
        type: 'dark',
        primary: {main: '#fff'},
    }
});


const CustomPagination = ({setPage, numberOfPages = 50 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    }
    
    return (
        <div>
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10,
            }

            }
            <ThemeProvider>
            <Pagination  count={10} color="primary"
            onChange={(e) => {handlePageChange(e.target.textContent)}}
            />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
