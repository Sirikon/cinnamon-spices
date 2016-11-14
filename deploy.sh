#!/usr/bin/env bash
npm run release
zip -r artifact dist/*
curl -F artifact=@./artifact.zip -F project=$MOLLY_PROJECT -F token=$MOLLY_TOKEN $MOLLY_URL"/deploy"
