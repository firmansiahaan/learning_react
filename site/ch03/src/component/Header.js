/* LISTING 3- 6: Object literals in JSX result in double curly braces */

function Header(props) {
    return (
        <>
            <h1>{{fontSize:"24px",color:"blue"}}</h1>
        </>
    );
}
export default Header;