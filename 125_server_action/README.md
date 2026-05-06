# Data Flow via Server action in Nextjs

User fills form
    ↓
Clicks Submit
    ↓
<form action={submitAction}>
    ↓
Next.js sends form data to server automatically
    ↓
submitAction() runs on server
    ↓
Server reads form data using e.get()
    ↓
fs.writeFile() stores data in file
    ↓
Server finishes action
    ↓
ref.current.reset() clears form