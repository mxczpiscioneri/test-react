#!/bin/sh

set -e

sed -i "s/COMMITID/$(echo $CI_COMMIT_ID)/" /deploy/taskDefinition.json
