import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Widgets.css'

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>  

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Try out react redux', 'Top news - 500 readers')}
            {newsArticle('Coronavirus: UK updates', 'Top news - 800 readers')}
            {newsArticle('Tesla hits new heights', 'Cars & Auto - 300 readers')}
        </div>
    )
}

export default Widgets
