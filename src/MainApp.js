import React from 'react';


export class MainApp extends React.Component {

    render() {
        const role = this.props.match.params.role;
        return (
            <div className="MainApp">
                {role.toLowerCase() === 'recruit'}
            </div>
        );
    }
}

export default MainApp;
