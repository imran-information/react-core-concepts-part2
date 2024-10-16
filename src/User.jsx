export default function User({ user }) {
    const { name, email } = user

    return (
        <div className="user">
            <h5>User Name: {name}</h5>
            <h5>User Email: {email}</h5>
        </div>
    )
}