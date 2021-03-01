import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link, useHistory } from 'react-router-dom'
const Header = ({backButton}) => {
    const history = useHistory();
    return (
        <div className='header'>
            {backButton ? 
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize='large' className='header__icon' /> 
                </IconButton>
                :
                <IconButton>
                    <PersonIcon fontSize='large' className='header__icon'/> 
                </IconButton>
            }
            
            <Link to='/'>
                <img 
                    className='header__logo'
                    src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png'
                    alt=""
                />
            </Link>

            <Link to='/chat'>
                <IconButton>
                    <ForumIcon fontSize='large' className='header__icon'/> 
                </IconButton>   
            </Link>
            

        </div>
    )
}

export default Header
