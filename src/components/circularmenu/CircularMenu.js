import React, {useState, Component} from 'react';
import classNames from 'classnames';
import './CircularMenu.sass';


const CircularMenuItem = (props) => {
    const style = {
        top: props.top,
        left: props.left
    };
    return (<a href={props.href} className="circular-menu__item" style={style}>
        {props.text}
    </a>);
};

const CircularMenuButton = (props) => {
    const [active, setActive] = useState(false);
    const btnStyleClass = classNames({
        "circular-menu__button": true,
        "circular-menu__button_active": active
    });
    let onClick = (e) => {
        e.preventDefault();
        props.onClick();
        setActive(!active);
    };
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className={btnStyleClass} onClick={onClick}>
            <span className="circular-menu__lines"/>
        </a>
    );
};

export class CircularMenu extends Component {

    constructor(props) {
        super(props);
        const role = this.props.role.toLowerCase();
        this.state = {
            radius: 60,
            pending: false,
            actions: [
                {
                    "id": 0,
                    "name": "Exit",
                    "href": "/"
                },
                {
                    "id": 1,
                    "name": "Logout",
                    "href": `/${role}/login`
                },
                {
                    "id": 2,
                    "name": "---",
                    "href": "#"
                },
                {
                    "id": 3,
                    "name": "---",
                    "href": "#"
                }
            ]
        };
        this.state.menuItemsAmount = this.state.actions.length;
        this.state.arc = Math.PI / 2 / (this.state.menuItemsAmount - 1);
    }

    calcMenuItemStyleLeft = (i) => {
        const angle = i * this.state.arc - Math.PI;
        const x = this.state.pending ? this.state.radius * Math.cos(angle) : 0;
        return `${50 + x}%`;
    };

    calcMenuItemStyleTop = (i) => {
        const angle = i * this.state.arc - Math.PI;
        const y = this.state.pending ? this.state.radius * Math.sin(angle) : 0;
        return `${50 + y}%`;
    };

    render() {
        return (
            <div className="circular-menu">
                {this.state.actions.map(
                    action => <CircularMenuItem
                        key={action.id}
                        href={action.href}
                        text={action.name}
                        left={this.calcMenuItemStyleLeft(action.id)}
                        top={this.calcMenuItemStyleTop(action.id)}
                    />
                )}
                <CircularMenuButton onClick={
                    () => this.setState({pending: !this.state.pending})
                }/>
            </div>
        )
    }
}
