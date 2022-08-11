import ScrollToTop from '../ScrollToTop.js'
const Vice = props => {

    const handleVice = e => {
        const target = e.target
        const pres = target.value   


        props.setVice(pres)
    }

    return (
        <>
        <ScrollToTop/>
            <h1 className="president">Vice President</h1>
            <div className="vice-box">
                    <div className="pres-cand">
                        <div className="profile vice1"></div>
                        <div className="pres-info">
                            <div className="pres-name">
                                <h3>Aries Dela Pena</h3>
                                <p>Mabuhay Partylist</p>
                            </div>
                            <input type="radio" name="vice-radio" value="Aries" onChange={handleVice} checked={props.vice === 'Aries'}></input>
                        </div>
                    </div>

                    <div className="pres-cand">
                        <div className="profile vice2"></div>
                        <div className="pres-info">
                            <div className="pres-name">
                                <h3>Gino Esguerra</h3>
                                <p>Basketball Partylist</p>
                            </div>
                            <input type="radio" name="vice-radio" value="Gino" onChange={handleVice} checked={props.vice === 'Gino'}></input>
                        </div>
                    </div>

                    <div className="pres-cand">
                        <div className="profile vice3"></div>
                        <div className="pres-info">
                            <div className="pres-name">
                                <h3>Jaylyster Albios</h3>
                                <p>UI Partylist</p>
                            </div>
                            <input type="radio" name="vice-radio" value="Jaylyster" onChange={handleVice} checked={props.vice === 'Jaylyster'}></input>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Vice;