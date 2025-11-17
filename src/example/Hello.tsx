interface Props {
    name?: string;
    color?: string;
}

export const Hello = ({name = 'falture', color = 'blue'}: Props) => {
    return <div style={{color}}>Hello {name}</div>;
};

// function Hello({name, color}: Props) {
//     return <div style={{color}}>Hello {name}</div>;
// }

export default Hello;