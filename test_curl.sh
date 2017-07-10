#!/bin/bash
curl -X POST -H "Content-Type: application/json" localhost:3001/sessions/create -d '{"username": "gonto","password":"gonto"}'