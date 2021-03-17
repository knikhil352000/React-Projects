import React from 'react'
import { Card, CardContent, Typography} from '@material-ui/core'
const InfoBox = ({ title, cases, total }) => {
    return (
        <Card className='infoBox'>
            <CardContent>
                {/* Title */}
                <Typography color='textSecondary' className='infoBox__title'>
                    {title}
                </Typography>

                {/* Number of Cases */}
                <h2 className='infoBox__cases'>{cases}</h2>

                {/* Total */}
                <Typography className='infoBox__total'>
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox
