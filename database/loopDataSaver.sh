#!/bin/bash

counter=1
while [ $counter -le 10 ]
  do
  sed -i '' s/[0-9][0-9]*/$counter/g ./database/dataSaver.cql
  cqlsh -f database/dataSaver.cql
  ((counter++))
done
