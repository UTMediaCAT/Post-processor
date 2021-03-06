# Post-processor
```
cd Post-Processor
python3 processor.py
```
### Advanced Usage
The post-processor also supports multi-processing for more efficient performance, to utilize this feature, run `python3 processor.py -num_procs=x -limit=y` where `x` is the number of processes to use and `y` is the memory limit (in bytes) of the local data after which it will be written to disk. Increasing `-limit` will prevent memory errors but may reduce performance speed. Recommended usage: `python3 processor.py -num_procs=10 -limit=5000000`

Required files and folder structure within Post-Processor directory:
- DomainOutput: holds all domain crawler output files
- TwitterOutput: holds all twitter crawler output files
- crawl_scope.csv: scope file that contains all the crawl domains
- citation_scope.csv: scope file that contains all the citation domains
- Output: a folder to hold the output of the processor, including output.csv, output.xlsx and interest_output.json (can be empty prior to running)
- Saved: a folder to hold saved intermediate states of files (can be empty)
- logs: a folder to hold logs (can be empty)
- tempFiles: a folder to hold all the temporary referral files created, must contain the two following sub-directories
    - Domain: for temporary domain files
    - Twitter: for temporary twitter files
    
output.xlsx will include an row for URL x from **DomainOutput** iff:
- x's domain is in **crawl scope** 
- x contains citation (text alias, or twitter handler) with domain from **citation scope**

Note: read_from_memory flag is can be manually turned on and off on processor.py main. If picking up the processor from a previous break, then run the program with read_from memory set to True.
