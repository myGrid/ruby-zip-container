var search_data = {"index":{"searchIndex":["ucf","container","malformeducferror","metainf","reservednameclasherror","ucferror","version","add()","close()","comment()","comment=()","commit()","commit_required?()","create()","dir()","each()","each_entry()","extract()","file()","find_entry()","get_entry()","get_input_stream()","get_output_stream()","glob()","in_memory?()","mkdir()","name()","new()","new()","on_disk?()","open()","read()","remove()","rename()","replace()","reserved_directories()","reserved_entry?()","reserved_files()","reserved_names()","size()","to_s()","verify()","verify!()","changes","licence","readme"],"longSearchIndex":["ucf","ucf::container","ucf::malformeducferror","ucf::metainf","ucf::reservednameclasherror","ucf::ucferror","ucf::version","ucf::container#add()","ucf::container#close()","ucf::container#comment()","ucf::container#comment=()","ucf::container#commit()","ucf::container#commit_required?()","ucf::container::create()","ucf::container#dir()","ucf::container#each()","ucf::container::each_entry()","ucf::container#extract()","ucf::container#file()","ucf::container#find_entry()","ucf::container#get_entry()","ucf::container#get_input_stream()","ucf::container#get_output_stream()","ucf::container#glob()","ucf::container#in_memory?()","ucf::container#mkdir()","ucf::container#name()","ucf::malformeducferror::new()","ucf::reservednameclasherror::new()","ucf::container#on_disk?()","ucf::container::open()","ucf::container#read()","ucf::container#remove()","ucf::container#rename()","ucf::container#replace()","ucf::container#reserved_directories()","ucf::container#reserved_entry?()","ucf::container#reserved_files()","ucf::container#reserved_names()","ucf::container#size()","ucf::container#to_s()","ucf::container::verify()","ucf::container::verify!()","","",""],"info":[["UCF","","UCF.html","","<p>This is a ruby library to read and write UCF files in PK Zip format. See\nthe UCF::Container class for …\n"],["UCF::Container","","UCF/Container.html","","<p>This class represents a UCF document in PK Zip format. See the\nspecification for more details.\n<p>This class …\n"],["UCF::MalformedUCFError","","UCF/MalformedUCFError.html","","<p>This exception is raised when a bad UCF is detected.\n"],["UCF::MetaInf","","UCF/MetaInf.html","",""],["UCF::ReservedNameClashError","","UCF/ReservedNameClashError.html","","<p>This exception is raised when a clash occurs with a reserved name.\n"],["UCF::UCFError","","UCF/UCFError.html","","<p>The base class of all other exceptions raised by this library.\n"],["UCF::Version","","UCF/Version.html","","<p>Library version information.\n"],["add","UCF::Container","UCF/Container.html#method-i-add","(entry, src_path, &continue_on_exists_proc)","<p>Convenience method for adding the contents of a file to the UCF document.\nIf asked to add a file with …\n"],["close","UCF::Container","UCF/Container.html#method-i-close","()",""],["comment","UCF::Container","UCF/Container.html#method-i-comment","","<p>Returns the UCF document comment, if it has one.\n"],["comment=","UCF::Container","UCF/Container.html#method-i-comment-3D","","<p>Set the UCF document comment to the new value.\n"],["commit","UCF::Container","UCF/Container.html#method-i-commit","()","<p>Commits changes that have been made since the previous commit to the UCF\ndocument. Returns <code>true</code> if anything …\n"],["commit_required?","UCF::Container","UCF/Container.html#method-i-commit_required-3F","","<p>Returns <code>true</code> if any changes have been made to this UCF\ndocument since the last commit, <code>false</code> otherwise. …\n"],["create","UCF::Container","UCF/Container.html#method-c-create","(filename, mimetype = DEFAULT_MIMETYPE, &block)","<p>Create a new UCF document on disk with the specified mimetype.\n"],["dir","UCF::Container","UCF/Container.html#method-i-dir","()","<p>Returns an object which can be used like ruby’s built in <code>Dir</code>\n(class) object, except that it works on …\n"],["each","UCF::Container","UCF/Container.html#method-i-each","","<p>Iterate over the entries in the UCF document. The entry objects returned by\nthis method are Zip::ZipEntry …\n"],["each_entry","UCF::Container","UCF/Container.html#method-c-each_entry","(filename, &block)","<p>Iterate over the entries in the UCF document. The entry objects returned by\nthis method are Zip::ZipEntry …\n"],["extract","UCF::Container","UCF/Container.html#method-i-extract","","<p>Extracts the specified entry of the UCF document to <code>dest_path</code>.\n<p>See the rubyzip documentation for details …\n"],["file","UCF::Container","UCF/Container.html#method-i-file","()","<p>Returns an object which can be used like ruby’s built in <code>File</code>\n(class) object, except that it works on …\n"],["find_entry","UCF::Container","UCF/Container.html#method-i-find_entry","","<p>Searches for entries within the UCF document with the specified name.\nReturns <code>nil</code> if no entry is found. …\n"],["get_entry","UCF::Container","UCF/Container.html#method-i-get_entry","","<p>Searches for an entry within the UCF document in a similar manner to\n<code>find_entry</code>, but throws +Errno::ENOENT+ …\n"],["get_input_stream","UCF::Container","UCF/Container.html#method-i-get_input_stream","","<p>Returns an input stream to the specified entry. If a block is passed the\nstream object is passed to the …\n"],["get_output_stream","UCF::Container","UCF/Container.html#method-i-get_output_stream","(entry, permission = nil, &block)","<p>Returns an output stream to the specified entry. If a block is passed the\nstream object is passed to …\n"],["glob","UCF::Container","UCF/Container.html#method-i-glob","","<p>Searches for entries within the UCF document that match the given glob.\n<p>See the rubyzip documentation …\n"],["in_memory?","UCF::Container","UCF/Container.html#method-i-in_memory-3F","()","<p>Is this UCF document memory resident as opposed to stored on disk?\n"],["mkdir","UCF::Container","UCF/Container.html#method-i-mkdir","(name, permission = 0755)","<p>Creates a directory in the UCF document. If asked to create a directory\nwith a reserved name this method …\n"],["name","UCF::Container","UCF/Container.html#method-i-name","","<p>Returns the filename of this UCF document.\n"],["new","UCF::MalformedUCFError","UCF/MalformedUCFError.html#method-c-new","(reason = nil)","<p>Create a new MalformedUCFError with an optional reason for why the UCF\ndocument is malformed.\n"],["new","UCF::ReservedNameClashError","UCF/ReservedNameClashError.html#method-c-new","(name)","<p>Create a new ReservedNameClashError with the name of the clash supplied.\n"],["on_disk?","UCF::Container","UCF/Container.html#method-i-on_disk-3F","()","<p>Is this UCF document stored on disk as opposed to memory resident?\n"],["open","UCF::Container","UCF/Container.html#method-c-open","(filename, &block)","<p>Open an existing UCF document from disk. It will be checked for conformance\nto the UCF specification …\n"],["read","UCF::Container","UCF/Container.html#method-i-read","","<p>Returns a string containing the contents of the specified entry.\n"],["remove","UCF::Container","UCF/Container.html#method-i-remove","(entry)","<p>Removes the specified entry from the UCF document. If asked to remove any\nreserved files such as the …\n"],["rename","UCF::Container","UCF/Container.html#method-i-rename","(entry, new_name, &continue_on_exists_proc)","<p>Renames the specified entry in the UCF document. If asked to rename any\nreserved files such as the special …\n"],["replace","UCF::Container","UCF/Container.html#method-i-replace","(entry, src_path)","<p>Replaces the specified entry of the UCF document with the contents of\n<code>src_path</code> (from the file system). …\n"],["reserved_directories","UCF::Container","UCF/Container.html#method-i-reserved_directories","()","<p>Return a list of reserved directory names for this UCF document.\n<p>When creating a more specialized sub-class …\n"],["reserved_entry?","UCF::Container","UCF/Container.html#method-i-reserved_entry-3F","(entry)","<p>Is the given entry name in the reserved list of file or directory names?\n"],["reserved_files","UCF::Container","UCF/Container.html#method-i-reserved_files","()","<p>Return a list of reserved file names for this UCF document.\n<p>When creating a more specialized sub-class …\n"],["reserved_names","UCF::Container","UCF/Container.html#method-i-reserved_names","()","<p>Return a list of reserved file and directory names for this UCF document.\n<p>In practice this method simply …\n"],["size","UCF::Container","UCF/Container.html#method-i-size","","<p>Returns the number of entries in the UCF document.\n"],["to_s","UCF::Container","UCF/Container.html#method-i-to_s","()","<p>Return a textual summary of this UCF document.\n"],["verify","UCF::Container","UCF/Container.html#method-c-verify","(filename)","<p>Verify that the specified UCF document conforms to the UCF specification.\nThis method returns <code>false</code> if …\n"],["verify!","UCF::Container","UCF/Container.html#method-c-verify-21","(filename)","<p>Verify that the specified UCF document conforms to the UCF specification.\nThis method raises exceptions …\n"],["Changes","","Changes_rdoc.html","","<p>Changes log for the UCF Ruby Gem\n<p>Version 0.1.0\n<p>Improvements to the reserved names code to allow sub-classing. …\n"],["Licence","","Licence_rdoc.html","","<p>Copyright © 2013 The University of Manchester, UK.\n<p>All rights reserved.\n<p>Redistribution and use in source …\n"],["ReadMe","","ReadMe_rdoc.html","","<p>Universal Container Format (UCF) Ruby Library\n<p>Authors &mdash; Robert Haines\n<p>Contact &mdash; support@mygrid.org.uk\n"]]}}