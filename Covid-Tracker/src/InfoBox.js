import React from 'react'
import './InfoBox.css'
import { Card, CardContent, Typography} from '@material-ui/core'
const InfoBox = ({ title, cases, total, isRed, active, ...props }) => {
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}>
            <CardContent>
                {/* Title */}
                <Typography color='textSecondary' className='infoBox__title'>
                    {title}
                </Typography>

                {/* Number of Cases */}
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>

                {/* Total */}
                <Typography className='infoBox__total'>
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox
