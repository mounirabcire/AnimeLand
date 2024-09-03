function TopBattlesList({ battles }) {
    return battles.map((battles, i) => (
        <TopBattleItem battles={battles} key={i} />
    ));
}

function TopBattleItem({ battles: { car1Name, car1Img, car2Img, car2Name } }) {
    return (
        <div className="header__caracters-box">
            <div className="header__caracter">
                <img
                    src={car1Img}
                    alt={car1Name}
                    className="header__caracter-img"
                />
                <p className="header__caracter-name">{car1Name}</p>
            </div>
            <span>vs</span>
            <div className="header__caracter">
                <img
                    src={car2Img}
                    alt={car2Name}
                    className="header__caracter-img"
                />
                <p className="header__caracter-name">{car2Name}</p>
            </div>
        </div>
    );
}

export default TopBattlesList;
