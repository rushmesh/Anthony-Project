from fastapi import FastAPI

app = FastAPI()

@app.get("/api/hello")
def get_message():
    return {"message": "Hello World"}

@app.get("/users")
def get_users():
    return [
        {"id": 1, "name": "Alice", "email": "alice@example.com"},
        {"id": 2, "name": "Bob", "email": "bob@example.com"}
    ]