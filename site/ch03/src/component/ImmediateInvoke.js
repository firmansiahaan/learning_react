/* LISTING 3- 13: Immediately invoking a function in JSX */

function ImmediateInvoke() {

    return (
        <div>
            {(() => <h1>The Header</h1>)() }
        </div>
    );
}
export default ImmediateInvoke;