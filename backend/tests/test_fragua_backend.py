import os
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL')
if not BASE_URL:
    # fallback: read from frontend/.env
    try:
        with open('/app/frontend/.env') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    BASE_URL = line.strip().split('=', 1)[1]
                    break
    except Exception:
        pass
BASE_URL = BASE_URL.rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert "message" in r.json()


def test_create_contact_and_persist(client):
    payload = {
        "name": "TEST_Fragua User",
        "company": "TEST Constructora",
        "email": "test_fragua@example.com",
        "phone": "+525540001200",
        "product": "Cemento y cal",
        "message": "TEST_MSG: Necesito 200 sacos de cemento en Tlalnepantla."
    }
    r = client.post(f"{API}/contacts", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["product"] == payload["product"]
    assert data["message"] == payload["message"]
    assert "id" in data and isinstance(data["id"], str)
    assert "created_at" in data
    assert "_id" not in data

    # GET verify persistence
    r2 = client.get(f"{API}/contacts")
    assert r2.status_code == 200
    contacts = r2.json()
    assert isinstance(contacts, list)
    ids = [c["id"] for c in contacts]
    assert data["id"] in ids
    for c in contacts:
        assert "_id" not in c


def test_contact_invalid_email(client):
    payload = {
        "name": "TEST_bad email",
        "email": "not-an-email",
        "message": "hello"
    }
    r = client.post(f"{API}/contacts", json=payload)
    assert r.status_code == 422


def test_contact_missing_required(client):
    r = client.post(f"{API}/contacts", json={"name": "TEST_x"})
    assert r.status_code == 422


def test_contact_optional_defaults(client):
    payload = {
        "name": "TEST_minimal",
        "email": "test_min@example.com",
        "message": "TEST_MIN"
    }
    r = client.post(f"{API}/contacts", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert data["product"] == "General"
    assert data["company"] == ""
    assert data["phone"] == ""
