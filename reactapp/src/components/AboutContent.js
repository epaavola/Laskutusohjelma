import React from 'react'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import strings from "../LocalizedStrings"
import esa from '../images/esa.jpg'
import vaino from '../images/vaino.jpg'
import sami from '../images/sami.jpg'
import kristian from '../images/kristian.jpg'


const useStyles = makeStyles(theme => ({
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    header1: {
        margin: '1%'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: '10%', 
        marginRight: '10%',
        marginTop: '2%'
    },
    content1: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '5%', 
        marginRight: '5%',
        marginTop: '2%'
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    TextField: {
        margin: '2%'
    },
})) 


const AboutContent = (props) => {

    // Style
    const classes = useStyles()

    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h2" color="primary" className={classes.header1}>
                    {strings.about}
                </Typography>         
            </div>
            <div className={classes.content}>
                <div className={classes.content1}>
                    <Typography variant="h3" color="primary" className={classes.header1}>
                        Esa
                    </Typography>
                    <img src={esa} alt="Esan kuva" className={classes.img}></img>
                </div>     
                <div className={classes.content1}>
                    <Typography variant="h3" color="primary" className={classes.header1}>
                        Väinö
                    </Typography>
                    <img src={vaino} alt="Esan kuva" className={classes.img}></img>
                </div> 
                <div className={classes.content1}>
                    <Typography variant="h3" color="primary" className={classes.header1}>
                        Sami
                    </Typography>
                    <img src={sami} alt="Esan kuva" className={classes.img}></img>
                </div> 
                <div className={classes.content1}>
                    <Typography variant="h3" color="primary" className={classes.header1}>
                        Kristian
                    </Typography>
                    <img src={kristian} alt="Esan kuva" className={classes.img}></img>
                </div> 
            </div>
        </div>
    ) 
}


export default AboutContent