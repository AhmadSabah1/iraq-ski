// components/Footer.tsx

export default function Footer() {
    return (
        <footer className="bg-surface border-t py-4">
            <div className="container mx-auto px-6 text-center text-sm text-muted">
                &copy; {new Date().getFullYear()} FlowCore. All rights reserved.
            </div>
        </footer>
    );
}
