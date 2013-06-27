var search_data = {"index":{"searchIndex":["zipcontainer","container","containererror","malformedcontainererror","manageddirectory","managedentries","managedentry","managedfile","reservednameclasherror","reservednames","version","add()","close()","comment()","comment=()","commit()","commit_required?()","container()","create()","dir()","each()","each_entry()","entries->enumerable()","exists?()","extract()","file()","find_entry()","full_name()","get_entry()","get_input_stream()","get_output_stream()","glob()","in_memory?()","initialize_managed_entries()","managed_directories()","managed_directory?()","managed_directory_names()","managed_entries()","managed_entry?()","managed_entry_names()","managed_file?()","managed_file_names()","managed_files()","mkdir()","name()","new()","new()","new()","new()","new()","on_disk?()","open()","read()","register_managed_entry()","register_reserved_name()","remove()","rename()","replace()","required?()","reserved_entry?()","reserved_names()","size()","to_s()","validate()","verify()","verify()","verify!()","verify!()","verify!()","verify!()","verify!()","verify_managed_entries!()","changes","licence","readme"],"longSearchIndex":["zipcontainer","zipcontainer::container","zipcontainer::containererror","zipcontainer::malformedcontainererror","zipcontainer::manageddirectory","zipcontainer::managedentries","zipcontainer::managedentry","zipcontainer::managedfile","zipcontainer::reservednameclasherror","zipcontainer::reservednames","zipcontainer::version","zipcontainer::container#add()","zipcontainer::container#close()","zipcontainer::container#comment()","zipcontainer::container#comment=()","zipcontainer::container#commit()","zipcontainer::container#commit_required?()","zipcontainer::managedentry#container()","zipcontainer::container::create()","zipcontainer::container#dir()","zipcontainer::container#each()","zipcontainer::container::each_entry()","zipcontainer::container#entries->enumerable()","zipcontainer::managedentry#exists?()","zipcontainer::container#extract()","zipcontainer::container#file()","zipcontainer::container#find_entry()","zipcontainer::managedentry#full_name()","zipcontainer::container#get_entry()","zipcontainer::container#get_input_stream()","zipcontainer::container#get_output_stream()","zipcontainer::container#glob()","zipcontainer::container#in_memory?()","zipcontainer::managedentries#initialize_managed_entries()","zipcontainer::managedentries#managed_directories()","zipcontainer::managedentries#managed_directory?()","zipcontainer::managedentries#managed_directory_names()","zipcontainer::managedentries#managed_entries()","zipcontainer::managedentries#managed_entry?()","zipcontainer::managedentries#managed_entry_names()","zipcontainer::managedentries#managed_file?()","zipcontainer::managedentries#managed_file_names()","zipcontainer::managedentries#managed_files()","zipcontainer::container#mkdir()","zipcontainer::container#name()","zipcontainer::malformedcontainererror::new()","zipcontainer::manageddirectory::new()","zipcontainer::managedentry::new()","zipcontainer::managedfile::new()","zipcontainer::reservednameclasherror::new()","zipcontainer::container#on_disk?()","zipcontainer::container::open()","zipcontainer::container#read()","zipcontainer::managedentries#register_managed_entry()","zipcontainer::reservednames#register_reserved_name()","zipcontainer::container#remove()","zipcontainer::container#rename()","zipcontainer::container#replace()","zipcontainer::managedentry#required?()","zipcontainer::reservednames#reserved_entry?()","zipcontainer::reservednames#reserved_names()","zipcontainer::container#size()","zipcontainer::container#to_s()","zipcontainer::managedfile#validate()","zipcontainer::container::verify()","zipcontainer::managedentry#verify()","zipcontainer::container#verify!()","zipcontainer::container::verify!()","zipcontainer::manageddirectory#verify!()","zipcontainer::managedentry#verify!()","zipcontainer::managedfile#verify!()","zipcontainer::managedentries#verify_managed_entries!()","","",""],"info":[["ZipContainer","","ZipContainer.html","","<p>This is a ruby library to read and write ZIP Container Format files. See\nthe ZipContainer::Container …\n"],["ZipContainer::Container","","ZipContainer/Container.html","","<p>This class represents a ZipContainer file in PK Zip format. See the OCF and\nUCF specifications for more …\n"],["ZipContainer::ContainerError","","ZipContainer/ContainerError.html","","<p>The base class of all other exceptions raised by this library.\n"],["ZipContainer::MalformedContainerError","","ZipContainer/MalformedContainerError.html","","<p>This exception is raised when a bad Container is detected.\n"],["ZipContainer::ManagedDirectory","","ZipContainer/ManagedDirectory.html","","<p>A ManagedDirectory acts as the interface to a set of (possibly) managed\nfiles within it and also reserves …\n"],["ZipContainer::ManagedEntries","","ZipContainer/ManagedEntries.html","","<p>This module provides support for managed file and directory entries.\n<p><strong>Note!</strong> If you mix this module in you ...\n"],["ZipContainer::ManagedEntry","","ZipContainer/ManagedEntry.html","","<p>ManagedEntry is the superclass of ManagedDirectory and ManagedFile. It\nshould not be used directly but …\n"],["ZipContainer::ManagedFile","","ZipContainer/ManagedFile.html","","<p>A ManagedFile is used to reserve a filename in a Container namespace.\n"],["ZipContainer::ReservedNameClashError","","ZipContainer/ReservedNameClashError.html","","<p>This exception is raised when a clash occurs with a reserved or managed\nname.\n"],["ZipContainer::ReservedNames","","ZipContainer/ReservedNames.html","","<p>This module provides support for reserved names.\n"],["ZipContainer::Version","","ZipContainer/Version.html","","<p>Library version information.\n"],["add","ZipContainer::Container","ZipContainer/Container.html#method-i-add","(entry, src_path, &continue_on_exists_proc)","<p>Convenience method for adding the contents of a file to the ZipContainer\nfile. If asked to add a file …\n"],["close","ZipContainer::Container","ZipContainer/Container.html#method-i-close","()",""],["comment","ZipContainer::Container","ZipContainer/Container.html#method-i-comment","","<p>Returns the ZipContainer file comment, if it has one.\n"],["comment=","ZipContainer::Container","ZipContainer/Container.html#method-i-comment-3D","","<p>Set the ZipContainer file comment to the new value.\n"],["commit","ZipContainer::Container","ZipContainer/Container.html#method-i-commit","()","<p>Commits changes that have been made since the previous commit to the\nZipContainer file. Returns <code>true</code> …\n"],["commit_required?","ZipContainer::Container","ZipContainer/Container.html#method-i-commit_required-3F","","<p>Returns <code>true</code> if any changes have been made to this\nZipContainer file since the last commit, <code>false</code> otherwise. …\n"],["container","ZipContainer::ManagedEntry","ZipContainer/ManagedEntry.html#method-i-container","()","<p>Return the Container that this ManagedEntry resides in.\n"],["create","ZipContainer::Container","ZipContainer/Container.html#method-c-create","(filename, mimetype, &block)","<p>Create a new ZipContainer file on disk with the specified mimetype.\n"],["dir","ZipContainer::Container","ZipContainer/Container.html#method-i-dir","()","<p>Returns an object which can be used like ruby’s built in <code>Dir</code>\n(class) object, except that it works on …\n"],["each","ZipContainer::Container","ZipContainer/Container.html#method-i-each","","<p>Iterate over the entries in the ZipContainer file. The entry objects\nreturned by this method are Zip::ZipEntry …\n"],["each_entry","ZipContainer::Container","ZipContainer/Container.html#method-c-each_entry","(filename, &block)","<p>Iterate over the entries in the ZipContainer file. The entry objects\nreturned by this method are Zip::ZipEntry …\n"],["entries -> Enumerable\n","ZipContainer::Container","ZipContainer/Container.html#method-i-entries+-2D-3E+Enumerable-0A","","<p>Returns an Enumerable containing all the entries in the ZipContainer file\nThe entry objects returned …\n"],["exists?","ZipContainer::ManagedEntry","ZipContainer/ManagedEntry.html#method-i-exists-3F","()","<p>Does this ManagedEntry exist in the Container?\n"],["extract","ZipContainer::Container","ZipContainer/Container.html#method-i-extract","","<p>Extracts the specified entry of the ZipContainer file to\n<code>dest_path</code>.\n<p>See the rubyzip documentation for …\n"],["file","ZipContainer::Container","ZipContainer/Container.html#method-i-file","()","<p>Returns an object which can be used like ruby’s built in <code>File</code>\n(class) object, except that it works on …\n"],["find_entry","ZipContainer::Container","ZipContainer/Container.html#method-i-find_entry","","<p>Searches for entries within the ZipContainer file with the specified name.\nReturns <code>nil</code> if no entry is …\n"],["full_name","ZipContainer::ManagedEntry","ZipContainer/ManagedEntry.html#method-i-full_name","()","<p>The fully qualified name of this ManagedEntry.\n"],["get_entry","ZipContainer::Container","ZipContainer/Container.html#method-i-get_entry","","<p>Searches for an entry within the ZipContainer file in a similar manner to\n<code>find_entry</code>, but throws +Errno::ENOENT+ …\n"],["get_input_stream","ZipContainer::Container","ZipContainer/Container.html#method-i-get_input_stream","","<p>Returns an input stream to the specified entry. If a block is passed the\nstream object is passed to the …\n"],["get_output_stream","ZipContainer::Container","ZipContainer/Container.html#method-i-get_output_stream","(entry, permission = nil, &block)","<p>Returns an output stream to the specified entry. If a block is passed the\nstream object is passed to …\n"],["glob","ZipContainer::Container","ZipContainer/Container.html#method-i-glob","","<p>Searches for entries within the ZipContainer file that match the given\nglob.\n<p>See the rubyzip documentation …\n"],["in_memory?","ZipContainer::Container","ZipContainer/Container.html#method-i-in_memory-3F","()","<p>Is this ZipContainer file memory resident as opposed to stored on disk?\n"],["initialize_managed_entries","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-initialize_managed_entries","(entries = [])","<p>Initialize the managed entries and register any that are supplied. A single\nManagedFile or ManagedDirectory …\n"],["managed_directories","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-managed_directories","()","<p>Return the list of managed directories.\n"],["managed_directory?","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-managed_directory-3F","(entry)","<p>Is the supplied entry/name a managed directory?\n"],["managed_directory_names","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-managed_directory_names","()","<p>Return the list of managed directory names.\n"],["managed_entries","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-managed_entries","()","<p>Return the list of managed files and directories.\n"],["managed_entry?","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-managed_entry-3F","(entry, list = managed_entry_names)","<p>Is the supplied entry/name a managed entry?\n"],["managed_entry_names","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-managed_entry_names","()","<p>Return the list of managed file and directory names.\n"],["managed_file?","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-managed_file-3F","(entry)","<p>Is the supplied entry/name a managed file?\n"],["managed_file_names","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-managed_file_names","()","<p>Return the list of managed file names.\n"],["managed_files","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-managed_files","()","<p>Return the list of managed files.\n"],["mkdir","ZipContainer::Container","ZipContainer/Container.html#method-i-mkdir","(name, permission = 0755)","<p>Creates a directory in the ZipContainer file. If asked to create a\ndirectory with a name reserved for …\n"],["name","ZipContainer::Container","ZipContainer/Container.html#method-i-name","","<p>Returns the filename of this ZipContainer file.\n"],["new","ZipContainer::MalformedContainerError","ZipContainer/MalformedContainerError.html#method-c-new","(reason = nil)","<p>Create a new MalformedContainerError with an optional reason for why the\nContainer file is malformed. …\n"],["new","ZipContainer::ManagedDirectory","ZipContainer/ManagedDirectory.html#method-c-new","(name, required = false, entries = [])","<p>Create a new ManagedDirectory with the supplied name and whether it is\nrequired to exist or not. Any …\n"],["new","ZipContainer::ManagedEntry","ZipContainer/ManagedEntry.html#method-c-new","(name, required)","<p>Create a new ManagedEntry with the supplied name. The entry should also be\nmarked as required or not. …\n"],["new","ZipContainer::ManagedFile","ZipContainer/ManagedFile.html#method-c-new","(name, required = false, validation_proc = nil)","<p>Create a new ManagedFile with the supplied name and whether it is required\nto exist or not.\n<p>If supplied …\n"],["new","ZipContainer::ReservedNameClashError","ZipContainer/ReservedNameClashError.html#method-c-new","(name)","<p>Create a new ReservedNameClashError with the name of the clash supplied.\n"],["on_disk?","ZipContainer::Container","ZipContainer/Container.html#method-i-on_disk-3F","()","<p>Is this ZipContainer file stored on disk as opposed to memory resident?\n"],["open","ZipContainer::Container","ZipContainer/Container.html#method-c-open","(filename, &block)","<p>Open an existing ZipContainer file from disk. It will be checked for\nconformance upon first access.\n"],["read","ZipContainer::Container","ZipContainer/Container.html#method-i-read","","<p>Returns a string containing the contents of the specified entry.\n"],["register_managed_entry","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-register_managed_entry","(entry)","<p>Register a ManagedFile or ManagedDirectory.\n<p>A ManagedFile is used to reserve the name of a file in the …\n"],["register_reserved_name","ZipContainer::ReservedNames","ZipContainer/ReservedNames.html#method-i-register_reserved_name","(name)","<p>Add a reserved name to the list.\n"],["remove","ZipContainer::Container","ZipContainer/Container.html#method-i-remove","(entry)","<p>Removes the specified entry from the ZipContainer file. If asked to remove\nany reserved files such as …\n"],["rename","ZipContainer::Container","ZipContainer/Container.html#method-i-rename","(entry, new_name, &continue_on_exists_proc)","<p>Renames the specified entry in the ZipContainer file. If asked to rename\nany reserved files such as the …\n"],["replace","ZipContainer::Container","ZipContainer/Container.html#method-i-replace","(entry, src_path)","<p>Replaces the specified entry of the ZipContainer file with the contents of\n<code>src_path</code> (from the file system). …\n"],["required?","ZipContainer::ManagedEntry","ZipContainer/ManagedEntry.html#method-i-required-3F","()","<p>Is this ManagedEntry required to be present according to the specification\nof its Container?\n"],["reserved_entry?","ZipContainer::ReservedNames","ZipContainer/ReservedNames.html#method-i-reserved_entry-3F","(entry)","<p>Is the given entry in the reserved list of names? A String or a\nZip::ZipEntry object can be passed in …\n"],["reserved_names","ZipContainer::ReservedNames","ZipContainer/ReservedNames.html#method-i-reserved_names","()","<p>Return a list of reserved file and directory names for this ZipContainer\nfile.\n<p>Reserved files and directories …\n"],["size","ZipContainer::Container","ZipContainer/Container.html#method-i-size","","<p>Returns the number of entries in the ZipContainer file.\n"],["to_s","ZipContainer::Container","ZipContainer/Container.html#method-i-to_s","()","<p>Return a textual summary of this ZipContainer file.\n"],["validate","ZipContainer::ManagedFile","ZipContainer/ManagedFile.html#method-i-validate","()","<p>Validate the contents of this ManagedFile. By default this methods uses the\nvalidation Proc supplied …\n"],["verify","ZipContainer::Container","ZipContainer/Container.html#method-c-verify","(filename)","<p>Verify that the specified ZipContainer file conforms to the specification.\nThis method returns <code>false</code> …\n"],["verify","ZipContainer::ManagedEntry","ZipContainer/ManagedEntry.html#method-i-verify","()","<p>Verify this ManagedEntry by checking that it exists if it is required\naccording to its Container specification …\n"],["verify!","ZipContainer::Container","ZipContainer/Container.html#method-i-verify-21","()","<p>Verify the contents of this ZipContainer file. All managed files and\ndirectories are checked to make …\n"],["verify!","ZipContainer::Container","ZipContainer/Container.html#method-c-verify-21","(filename)","<p>Verify that the specified ZipContainer file conforms to the specification.\nThis method raises exceptions …\n"],["verify!","ZipContainer::ManagedDirectory","ZipContainer/ManagedDirectory.html#method-i-verify-21","()","<p>Verify this ManagedDirectory for correctness. ManagedFiles registered\nwithin it are verified recursively. …\n"],["verify!","ZipContainer::ManagedEntry","ZipContainer/ManagedEntry.html#method-i-verify-21","()","<p>Verify this ManagedEntry raising a MalformedContainerError if it fails.\n<p>Subclasses should override this …\n"],["verify!","ZipContainer::ManagedFile","ZipContainer/ManagedFile.html#method-i-verify-21","()","<p>Verify this ManagedFile for correctness. The contents are validated if\nrequired.\n<p>A MalformedContainerError …\n"],["verify_managed_entries!","ZipContainer::ManagedEntries","ZipContainer/ManagedEntries.html#method-i-verify_managed_entries-21","()","<p>All managed files and directories are checked to make sure that they exist,\nif required.\n"],["Changes","","Changes_rdoc.html","","<p>Changes log for the ZIP Container Ruby Gem\n<p>Version 0.8.0\n<p>Abstract out all the underlying zip functionality …\n"],["Licence","","Licence_rdoc.html","","<p>Copyright © 2013 The University of Manchester, UK.\n<p>All rights reserved.\n<p>Redistribution and use in source …\n"],["ReadMe","","ReadMe_rdoc.html","","<p>ZIP Container Format Ruby Library\n<p>Authors &mdash; Robert Haines\n<p>Contact &mdash; support@mygrid.org.uk\n"]]}}