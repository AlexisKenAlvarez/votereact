import ScrollToTop from '../ScrollToTop.js'
const Treasurer = props => {

    const handleTreasurer = e => {
        const target = e.target
        const pres = target.value   


        props.setTreasurer(pres)
    }

    return (
        <>
        <ScrollToTop/>
            <h1 className="president">Treasurer</h1>
            <div className="treas-box">
                    <div className="pres-cand">
                        <div className="profile treas1"></div>
                        <div className="pres-info">
                            <div className="pres-name">
                                <h3>Alexis Ken Alvarez</h3>
                                <p>Mabuhay Partylist</p>
                            </div>
                            <input type="radio" name="treas-radio" value="Alexis" onChange={handleTreasurer} checked={props.treasurer === 'Alexis'}></input>
                        </div>
                    </div>

                    <div className="pres-cand">
                        <div className="profile treas2"></div>
                        <div className="pres-info">
                            <div className="pres-name">
                                <h3>Jude De Castro</h3>
                                <p>Basketball Partylist</p>
                            </div>
                            <input type="radio" name="treas-radio" value="Jude" onChange={handleTreasurer} checked={props.treasurer === 'Jude'}></input>
                        </div>
                    </div>

                    <div className="pres-cand">
                        <div className="profile treas3"></div>
                        <div className="pres-info">
                            <div className="pres-name">
                                <h3>Gilmar Resureccion</h3>
                                <p>UI Partylist</p>
                            </div>
                            <input type="radio" name="treas-radio" value="Gilmar" onChange={handleTreasurer} checked={props.treasurer === 'Gilmar'}></input>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Treasurer;