export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer">
            <p>&copy; Holly Knox {year}</p>
        </div>
    )
}