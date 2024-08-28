import sopaImage from '../images/sopa.jpg';

export default function Header() {
    return (
        <header style={{ backgroundColor: '#f8f9fa', padding: '20px 0', textAlign: 'center' }}>
            <img
                src={sopaImage}

                alt="Banner decorativo"
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        </header>
    );
}